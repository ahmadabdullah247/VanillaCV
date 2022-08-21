import { createStyles, Group, Button } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {  IconPlus } from '@tabler/icons';
import { SectionItem } from './SectionItem'

const useStyles = createStyles((theme) => ({
  item: {
    // display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
    paddingLeft: theme.spacing.xl - theme.spacing.md, // to offset drag handle
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
  },

  id: {
    fontSize: 30,
    fontWeight: 700,
    width: 60,
  },

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
}));

interface SectionProps {
  data: {
    position: number;
    mass: number;
    id: string;
    name: string;
  }[];
}

export function Section({ data }: SectionProps) {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);

  function handleRemove(id) {
    const newList = state.filter((item) => item.id !== id);
    handlers.setState(newList)

    // setList(newList);
  }
  const onAddBtnClick = (event) => {
    handlers.append({ "position": 6, "mass": 12.011, "id": "xxx", "name": "Carbon" });
  };

  const items = state.map((item, index) => (
    <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <SectionItem provided={provided} handleRemove={handleRemove} item={item}/>
        </div>
      )}
    </Draggable>
  ));

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Group position="center" mt="md">
        <Button type="submit" radius="xl" onClick={onAddBtnClick}>
          <IconPlus size={16} />
        </Button>
      </Group>
    </div>
  );
}