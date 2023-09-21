export default function StepRange() {
    return (
        <div>
            <label htmlFor="rotationRange" className="form-label">Rotate</label>
            <input type="range" className="form-range" min="0" max="14" step="1" id="rotationRange" />
        </div>
    );
}