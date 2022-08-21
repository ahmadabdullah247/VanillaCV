

import { IconGripVertical, IconX } from '@tabler/icons';
import { createStyles, Text, Button, Grid } from '@mantine/core';
import { Subsection } from './Subsection'

const useStyles = createStyles((theme) => ({
    dragHandle: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

}))


export function SectionItem({ item, provided, handleRemove }) {
    const { classes } = useStyles();
    return (
        <>
            <Grid>
                <Grid.Col span={1}>
                {/* {child} */}
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical size={18} stroke={1.5} />
                    </div>
                </Grid.Col>
                <Grid.Col span={10}>
                {/* {child} */}
                    <div>
                        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                            <Text size="lg" weight={700} className={classes.title}>
                                {item.name}
                            </Text>
                            {/* <Subsection></Subsection> */}
                        </form>
                    </div>
                </Grid.Col>
                <Grid.Col span={1}>
                {/* {child} */}
                    <div>
                        <Button type="submit" onClick={() => handleRemove(item.id)}>
                            <IconX size={9} stroke={1.5} />
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    )

}