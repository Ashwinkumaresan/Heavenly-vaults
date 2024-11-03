import "./../style/Kitchen_sign_in.css"
export const Sign_in_kitchen = () => {
  return (
    <>
    {/* <div className="kitchen_sign_in">
        <h1>Register your <span>kitchen</span></h1>
        <div className="form">
            <form >
                <input type="text" title="Kitchen name" placeholder="Kitchen name"  />
                <input type="text" title="Your name" placeholder="Your name" />
                <textarea name="Kitchen_Address" title="Kitchen address" id="Kitchen_Address" placeholder="Kitchen address" ></textarea>
                <input type="text" title="City" placeholder="City" />
                <input type="text" title="State" placeholder="State" />
                <input type="number" title="Pincode" placeholder="Pincode"  />
                <label htmlFor="Upload" className="custom-file-upload">Choose your kitchen image</label>
                <input type="file" id="Upload" />
            </form>
        </div>
                    <a href="/kitchen-page"><button>Sign in</button></a>
    </div> */}

        <div className="signinform container mt-5">
            <div className="row">

                <div className="col-xxl-6 col-xl-6 col-md-6 firstdetails ">
                    <form action="#">
                        <p className="text-center">General information</p>
                        <div className="d-flex flex-column">
                            <input type="text" placeholder="Kitchen name"/>
                            <div className="namediv">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <input type="text" placeholder="FSSAI number" />
                            <input type="text" placeholder="GST number" />
                        </div>
                    </form>
                </div>

                <div className="col-xxl-6 col-xl-6 col-md-6 seconddetails">
                    <form action="#">
                        <p className="text-center">Address information</p>
                        <div className="d-flex flex-column">
                            <input type="text" placeholder="Street + Nr"/>
                            <input type="text" placeholder="Additional information" />
                            <div className="namediv">
                                <input type="text" placeholder="City" />
                                <input type="text" placeholder="Zipcode" />
                            </div>
                            <input type="text" placeholder="Country" />
                            <input type="text" placeholder="Phone number" />
                            <input type="text" placeholder="Your email" />
                            <div className="check">
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">I do accept the <a href="#">Terms and Conditions</a> of your site.</label>
                            </div>
                            <button>
                                <a href="/kitchen-dashboard">Sign in</a>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </>
    )
}
