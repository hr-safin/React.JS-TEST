import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-body-tertiary py-4 text-center">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example26"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-primary mb-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div
          className="text-center p-3"
          
        >
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
