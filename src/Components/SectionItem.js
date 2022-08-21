

import { IconGripVertical, IconX } from '@tabler/icons';
import { createStyles, Text, Grid, ActionIcon } from '@mantine/core';
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
            <Grid columns={24}>
                <Grid.Col span={2}>
                {/* {child} */}
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical size={16}  />
                    </div>
                </Grid.Col>
                <Grid.Col span={21}>
                {/* {child} */}
                    <div>
                        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                            <Text size="lg" weight={700} className={classes.title}>
                                {item.name}
                            </Text>
                            <Subsection></Subsection>
                        </form>
                    </div>
                </Grid.Col>
                <Grid.Col span={1}>
                {/* {child} */}
                    <div>
                        <ActionIcon type="submit" onClick={() => handleRemove(item.id)}>
                            <IconX  size={16}/>
                        </ActionIcon>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    )

}