import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode title="Merge" handles={[
      { id: `${id}-a`, type: 'target', position: Position.Left, style: { top: 20 } },
      { id: `${id}-b`, type: 'target', position: Position.Left, style: { top: 50 } },
      { id: `${id}-out`, type: 'source', position: Position.Right }
    ]} width={220}>
      <div style={{ fontSize: 12 }}>Merges two streams</div>
    </BaseNode>
  );
};
