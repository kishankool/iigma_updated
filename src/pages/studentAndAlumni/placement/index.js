import { useState } from 'react';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        email: '',
        phone: '',
        country: 'None Selected',
        city: '',
        course: 'None',
        mode: 'None',
        about: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="registration-page-area">
            <div className="container">
                <h2 className="sidebar-title">Enquiry</h2>
                <div className="registration-details-area inner-page-padding">
                    <form id="checkout-form" onSubmit={handleSubmit} action="https://backend.iigminstitute.com/api/admission/admissionEnquiry">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="first-name">Full Name *</label>
                                    <input type="text" id="first-name" name="fullName" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="last-name">Age *</label>
                                    <input type="text" id="last-name" name="age" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="phone">Phone *</label>
                                    <input type="text" id="phone" name="phone" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        {/* Add other form fields similarly */}
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="country">Country</label>
                                    <div className="custom-select">
                                        <select id="country" name="country" className='select2'>
                                            <option value="None Selected">Select your country</option>
                                            <option value="India">India</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="SOuth Africa">South Africa</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Germany">Germany</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="town-city">Town / City</label>
                                    <input type="text" id="town-city" name="city" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="country">Select Course</label>
                                    <div className="custom-select">
                                        <select id="course" name="course" className='select2'>
                                            <option value="None">Select your course</option>
                                            <option value="Commercial Goat Farming And Management">Commercial Goat
                                                Farming and Management</option>
                                            <option value="Livestock Entrepreneurship And Business Management">Livestock
                                                Entrepreneurship And Business Management
                                            </option>
                                            <option value="Livestock Based Livelihoods Project Management (LLPM)">
                                                Livestock Based Livelihoods Project Management (LLPM)
                                            </option>
                                            <option value="Goat Value Chain Management">Goat Value Chain Management
                                            </option>
                                            <option value="Diploma in Livestock Entrepreneurship and Business
                                            Management">Diploma in Livestock Entrepreneurship and Business
                                                Management</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="town-city">Mode of course</label>
                                    <div className="custom-select">
                                        <select id="course" name="mode" className='select2'>
                                            <option value="None">Select your course type</option>
                                            <option value="Online">Online</option>
                                            <option value="Residential">Residential</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="control-label">About Me(optional)</label>
                                    <textarea name="about" type="text" id="address-line1" className="form-control" rows="5" onChange={handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="pLace-order mt-30">
                                    <button className="view-all-accent-btn" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
