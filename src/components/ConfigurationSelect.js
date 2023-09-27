import {Form} from "react-bootstrap";

export default function ConfigurationSelect({label, options, onChange}) {
    return (
        <Form.Group>
            <Form.Label><strong>{label}</strong></Form.Label>
            <Form.Select
                onChange={onChange}
                defaultValue={options ? options[0].value : ''}
            >
                {
                    options.map(data => {
                        return <option
                            key={data.id}
                            value={data.value}
                        >
                            {data.label}
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    )
}