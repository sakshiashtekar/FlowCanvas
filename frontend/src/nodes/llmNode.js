import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      handles={[
        { id: `${id}-system`, type: 'target', position: Position.Left, style: { top: '25%' } },
        { id: `${id}-prompt`, type: 'target', position: Position.Left, style: { top: '55%' } },
        { id: `${id}-response`, type: 'source', position: Position.Right },
      ]}
      width={240}
    >
      <div style={{ fontSize: 13 }}>Large Language Model node — accepts prompts and outputs responses.</div>
    </BaseNode>
  );
};
