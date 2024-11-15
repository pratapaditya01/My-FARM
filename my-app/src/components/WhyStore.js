import { FaLeaf, FaCheckCircle } from 'react-icons/fa';
import "./WhyStore.css"
function WhyStore() {
  return (
    <div className="product-info">
      <h2>Why MyFarm IND?</h2>
      <ul>
        <li><FaLeaf /> Farm Fresh</li>
        <li><FaLeaf /> Made in Small Batches</li>
        <li><FaCheckCircle /> Positive Impact</li>
        <li><FaCheckCircle /> Rooted in Tradition</li>
      </ul>
    </div>
  );
}

export default WhyStore;
