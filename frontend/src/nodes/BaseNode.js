import { Handle } from 'reactflow';

export const BaseNode = ({ title, width = 260, handles = [], children }) => {
  return (
    <div className="base-node" style={{ width }}>
      <div className="base-node-title">{title}</div>

      {handles.map((h) => (
        <Handle
          key={h.id}
          id={h.id}
          type={h.type}
          position={h.position}
          style={h.style}
          className="base-node-handle"
        />
      ))}

      <div className="base-node-content">
        {children}
      </div>
    </div>
  );
};
