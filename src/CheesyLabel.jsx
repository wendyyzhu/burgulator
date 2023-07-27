import cheesyParty from "./cheesyParty.js"
import './CheesyLabel.css'

export default function CheesyLabel({ ingredients }) {
    return <div className="cheese-label">{cheesyParty(ingredients)}</div>
}