import React from 'react';
import './styles/Signupstyle.css';
// import ScriptTag from 'react-script-tag';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                first_name: '',
                eMail: null,
                location: null,
                contactno: null,
                password: null
            },
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userdata = this.first_name;
        console.log(userdata);
    };

    render() {
        return (

            <div className="container">

                <form className="well form-horizontal" onSubmit={this.handleFormSubmit} id="contact_form">
                    <fieldset>

                        <legend><center><h2><b>Registration Form</b></h2></center></legend><br />

                        <div className="form-group">
                            <label className="col-md-4 control-label">First Name</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="first_name" placeholder="First Name" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label">E-Mail</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="eMail" placeholder="E-Mail Address" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="col-md-4 control-label" >Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="user_password" placeholder="Password" className="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" >Confirm Password</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="confirm_password" placeholder="Confirm Password" className="form-control" type="password" />
                                </div>
                            </div>
                        </div>



                        <div className="form-group">
                            <label className="col-md-4 control-label">Select Location</label>
                            <div className="col-md-4 selectContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                    <select name="location" className="form-control selectpicker">
                                        <option value="">Select Location</option>
                                        <option>Mumbai</option>
                                        <option>Pune</option>
                                        <option >Anand</option>
                                        <option >Surat</option>
                                        <option >Vadodara</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label">Contact No.</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                    <input name="contact_no" placeholder="(639)" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" />
                            <div className="col-md-4"><br />
                                <button type="submit" className="btn btn-warning" >SUBMIT <span className="glyphicon glyphicon-send"></span></button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                {/* <ScriptTag isHydrating={true} type="text/javascript" src="FormValidation.js" /> */}
            </div>

        )
    }
}

export default Signup;