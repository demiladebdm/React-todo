import React from 'react'

// Component Import
import TaskItem from './TaskItem'

// Styles
import styles from './TaskList.module.css'

const TaskList = ({ tasks, toggleTask, enterEditMode, deleteTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem 
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
            deleteTask={deleteTask}
        />
      ))
      }
    </ul>
  )
}

export default TaskList
