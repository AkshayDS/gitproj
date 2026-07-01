import { useState } from 'react';
import '../styles/TaskList.css';

function TaskList({ tasks, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editPriority, setEditPriority] = useState('');

  const handleEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditStatus(task.status);
    setEditPriority(task.priority);
  };

  const handleSave = (taskId) => {
    onUpdate(taskId, {
      title: editTitle,
      description: editDescription,
      status: editStatus,
      priority: editPriority,
    });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10b981';
      case 'in-progress':
        return '#f59e0b';
      case 'todo':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          {editingId === task._id ? (
            <div className="task-edit-form">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="edit-input"
                placeholder="Task title"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="edit-textarea"
                placeholder="Task description"
              />
              <div className="edit-controls">
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="edit-select"
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="edit-select"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="edit-buttons">
                <button
                  onClick={() => handleSave(task._id)}
                  className="btn-save"
                >
                  Save
                </button>
                <button onClick={handleCancel} className="btn-cancel">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="task-header">
                <h3>{task.title}</h3>
                <div className="task-badges">
                  <span
                    className="badge status"
                    style={{ backgroundColor: getStatusColor(task.status) }}
                  >
                    {task.status}
                  </span>
                  <span
                    className="badge priority"
                    style={{ backgroundColor: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
              <p className="task-description">{task.description}</p>
              <div className="task-footer">
                <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
                <div className="task-actions">
                  <button
                    onClick={() => handleEdit(task)}
                    className="btn-action btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(task._id)}
                    className="btn-action btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
