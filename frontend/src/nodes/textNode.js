import { useState, useRef, useEffect, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text ?? "{{input}}");
  const textareaRef = useRef(null);

  // Detect {{variable}} patterns
  const varRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

  const variables = useMemo(() => {
    const found = new Set();
    let match;
    while ((match = varRegex.exec(currText)) !== null) {
      found.add(match[1]);
    }
    return Array.from(found);
  }, [currText]);

  // Auto resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  }, [currText]);

  return (
    <BaseNode title="Text" width={320}>
      {/* Main input handle */}
      <Handle
        id={`${id}-input`}
        type="target"
        position={Position.Left}
        className="base-node-handle"
        style={{ top: 20 }}
      />

      {/* Variable handles */}
      {variables.map((v, index) => (
        <Handle
          key={v}
          id={`${id}-${v}`}
          type="target"
          position={Position.Left}
          className="base-node-handle"
          style={{ top: 60 + index * 22 }}
        />
      ))}

      {/* Output handle */}
      <Handle
        id={`${id}-output`}
        type="source"
        position={Position.Right}
        className="base-node-handle"
        style={{ top: "50%" }}
      />

      <label style={{ fontSize: 12, marginBottom: 6 }}>
        Text (use {"{{var}}"} syntax for variables):
      </label>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Type template text here"
        style={{
          resize: "none",
          minHeight: 40,
          width: "100%",
          fontSize: 13,
          padding: 8,
          borderRadius: 6,
          border: "1px solid rgba(0,0,0,0.1)"
        }}
      />

      {variables.length > 0 && (
        <div style={{ marginTop: 8, fontSize: 12 }}>
          Variables detected: {variables.join(", ")}
        </div>
      )}
    </BaseNode>
  );
};
