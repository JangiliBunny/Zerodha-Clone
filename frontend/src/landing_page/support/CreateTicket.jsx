import React from "react";

function CreateTicket() {
  return (
    <div className="continer">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-7">
          <div class="accordion sidebar-menu" id="supportSidebar">
            {/* <!-- 1 --> */}
            <div
              className="accordion-item  p-2"
              style={{ marginBottom: "25px" }}
            >
              <h2 class="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#dd1"
                >
                  <i
                    class="fa-solid fa-circle-plus"
                    style={{ marginLeft: "5px", marginRight: "18px" }}
                  ></i>
                  Account Opening
                </button>
              </h2>
              <div
                id="dd1"
                class="accordion-collapse collapse"
                data-bs-parent="#supportSidebar"
              >
                <div class="accordion-body">
                  <a href="#">Resident Individual</a>

                  <a href="#">Minor</a>

                  <a href="#">NRI</a>

                  <a href="#">Company / HUF / LLP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 2 --> */}
      <div className="continer ">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div class="accordion sidebar-menu" id="supportSidebar">
              <div class="accordion-item  p-2" style={{ marginBottom: "25px" }}>
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dd2"
                  >
                    <i
                      class="fa-solid fa-user"
                      style={{ marginLeft: "5px", marginRight: "18px" }}
                    ></i>
                    Your Zerodha Account
                  </button>
                </h2>
                <div
                  id="dd2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#supportSidebar"
                >
                  <div class="accordion-body">
                    <a href="#">Profile</a>
                    <a href="#">Segment Activation</a>
                    <a href="#">Nomination</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 3 --> */}
      <div className="continer">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div class="accordion sidebar-menu" id="supportSidebar">
              <div class="accordion-item  p-2" style={{ marginBottom: "25px" }}>
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dd3"
                  >
                    <i
                      class="fa-brands fa-nfc-symbol"
                      style={{ marginLeft: "5px", marginRight: "18px" }}
                    ></i>
                    Kite
                  </button>
                </h2>
                <div
                  id="dd3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#supportSidebar"
                >
                  <div class="accordion-body">
                    <a href="#">Orders</a>
                    <a href="#">Watchlist</a>
                    <a href="#">Charts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 4 --> */}
      <div className="continer">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div class="accordion sidebar-menu" id="supportSidebar">
              <div class="accordion-item  p-2" style={{ marginBottom: "25px" }}>
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dd4"
                  >
                    <i
                      class="fa-solid fa-circle-radiation"
                      style={{ marginLeft: "5px", marginRight: "18px" }}
                    ></i>
                    Console
                  </button>
                </h2>
                <div
                  id="dd4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#supportSidebar"
                >
                  <div class="accordion-body">
                    <a href="#">Reports</a>
                    <a href="#">Funds</a>
                    <a href="#">Statements</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 5 --> */}
      <div className="continer">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div class="accordion sidebar-menu" id="supportSidebar">
              <div class="accordion-item  p-2" style={{ marginBottom: "25px" }}>
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dd5"
                  >
                    <i
                      class="fa-solid fa-indian-rupee-sign"
                      style={{ marginLeft: "5px", marginRight: "18px" }}
                    ></i>
                    Funds
                  </button>
                </h2>
                <div
                  id="dd5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#supportSidebar"
                >
                  <div class="accordion-body">
                    <a href="#">
                      <li>Add Funds</li>
                    </a>
                    <a href="#">
                      <li>Withdraw Funds</li>
                    </a>
                    <a href="#">
                      <li>View Limits</li>
                    </a>
                    <a href="#">
                      <li>Add bank accounts</li>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 6 --> */}
      <div className="continer">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <div class="accordion sidebar-menu" id="supportSidebar">
              <div class="accordion-item p-2" style={{ marginBottom: "25px" }}>
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dd6"
                  >
                    <i
                      class="fa-solid fa-coins"
                      style={{ marginLeft: "5px", marginRight: "18px" }}
                    ></i>
                    Coin
                  </button>
                </h2>
                <div
                  id="dd6"
                  class="accordion-collapse collapse"
                  data-bs-parent="#supportSidebar"
                >
                  <div class="accordion-body">
                    <a href="#">
                      <li>Features on Coin</li>
                    </a>
                    <a href="#">
                      <li>GST</li>
                    </a>
                    <a href="#">
                      <li>Other Charges</li>
                    </a>
                    <a href="">
                      <li>Mutual funds</li>
                    </a>
                    <a href="">
                      <li>National Pension Scheme (NPS)</li>
                    </a>
                    <a href="">
                      <li>Fixed Deposit (FD)</li>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
