import React,{Component} from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            comment: '',
            globalTitle: '',
        }
         this.onChange = this.onChange.bind(this);
         this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }
    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
    }
    componentDidMount() {
        console.log("Rendered Form");
    }
    submitForm() {
        this.setState ({
            globalTitle: 'My Title'
        })
}
    componentDidUpdate() {
        if (this.state.globalTitle!='') {
            console.log('Title Changed');
        }

    }
    render() {
        return (
            <div className="FormEmployee">
                <h1> Film Information</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>

                        <div className="form-data">
                            <label htmlFor="email">Comment:</label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr/>
                        <div className="form-data">
                            <input type="submit" value="Send"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Forms;