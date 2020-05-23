import React, { Component } from 'react';

//component used to create a new stream after user fills out a form
//utilizes Bootstrap's classes and JS for validation
class StreamCreate extends Component {
    componentDidMount(){
        this.loadFormValidation();
    }

    //form validation - do not submit if input fields are not filled out
    loadFormValidation(){
        let form = document.getElementById('streamForm');
        form.addEventListener('submit', (event) => {
            if(form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }
    
    render(){
        return(
            <div>
                <h3>Create a new stream</h3>

                <form className="needs-validation" id="streamForm" noValidate>
                <div className="form-group">
                    <label htmlFor="formTitle">Stream Title</label>
                    <input type="text" className="form-control" id="formTitle" placeholder="Enter Name" required />
                    <div className="invalid-feedback" >
                        Please input a name.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="formDescription">Stream Description.</label>
                    <input type="text" className="form-control" id="formDescription" placeholder="Enter Description" required />
                    <div className="invalid-feedback" >
                        Please input a description.
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div>
        );
    }
};

export default StreamCreate;