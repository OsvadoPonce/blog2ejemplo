import React from "react";
import abeja from "../public/img/abeja.png";
import Link from "next/link";
import Image from "next/image";

const RegisterProyect = () => {
  return (
    <>
      <section className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
              <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
                <h2 className="text-white">Comienza tu proyecto</h2>
                <p>
                  Con el DashBoard nosotros te acompañamos en el camino para que
                  adoptes la cultura data driven en tu empresa.
                </p>
                <hr />
                <div
                  className="tab-content testimonial-tab-content text-white-80"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="testimonial-tab-1"
                    role="tabpanel"
                  >
                    <blockquote className="blockquote">
                      <em>
                        "La construcción de una cultura de datos no es fácil, se
                        requiere persistencia y paciencia. Es más probable
                        alcanzar el éxito si se co- mienza con pequeños
                        proyectos y se va construyendo poco a poco que si se
                        trata de abarcar todo de una vez."
                      </em>
                    </blockquote>
                    <div className="author-info mt-3">
                      <span className="h6">
                        Data Driven: Creating a Data Culture
                      </span>
                      <span className="d-block small">O'Reilly</span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="testimonial-tab-2"
                    role="tabpanel"
                  >
                    <blockquote className="blockquote">
                      <em>
                        "Synergistically evisculate market positioning
                        technology vis-a-vis team driven innovation.
                        Phosfluorescently morph tactical communities for
                        superior applications. Distinctively pontificate
                        resource-leveling infomediaries and parallel models. "
                      </em>
                    </blockquote>
                    <div className="author-info mt-3">
                      <span className="h6">Raymond H. Gilbert</span>
                      <span className="d-block small">
                        Forest fire inspector
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="testimonial-tab-3"
                    role="tabpanel"
                  >
                    <blockquote className="blockquote">
                      <em>
                        "Professionally myocardinate corporate e-commerce
                        through alternative functionalities. Compellingly matrix
                        distributed convergence with goal-oriented synergy.
                        Professionally embrace interactive opportunities through
                        parallel innovation. "
                      </em>
                    </blockquote>
                    <div className="author-info mt-3">
                      <span className="h6">Donna R. Book</span>
                      <span className="d-block small">Extractive engineer</span>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#testimonial-tab-1"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <Image
                        src={abeja}
                        alt="testimonial"
                        width={55}
                        className="img-fluid rounded-circle"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#testimonial-tab-2"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <Image
                        src={abeja}
                        alt="testimonial"
                        width={55}
                        className="img-fluid rounded-circle"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#testimonial-tab-3"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <Image
                        src={abeja}
                        alt="testimonial"
                        width={55}
                        className="img-fluid rounded-circle"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
              <div className="register-wrap p-5 bg-white shadow rounded-custom">
                <h3 className="fw-medium">Cuéntanos sobre tu proyecto </h3>
                <h3>
                  <form
                    action="https://formsubmit.co/6eb527725240c0cac79d680d469d3cc0"
                    method="POST"
                    className="mt-4 register-form"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                            aria-label="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 ">
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            name="email-personal"
                            className="form-control"
                            placeholder="Email"
                            aria-label="email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="empresa"
                            className="form-control"
                            placeholder="Empresa"
                            aria-label="company-website"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            name="email-empresa"
                            className="form-control"
                            placeholder="Empresa email"
                            aria-label="work-Email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group mb-3">
                          <select
                            className="form-control form-select"
                            name="budget"
                            id="budget"
                            required=""
                            data-msg="Please select your budget."
                          >
                            <option value="" selected="" disabled="">
                              Presupuesto
                            </option>
                            <option value="budget1">
                              None, just getting started
                            </option>
                            <option value="budget1">Less than $20,000</option>
                            <option value="budget1">$20,000 to $50,000</option>
                            <option value="budget1">$50,000 to $100,000</option>
                            <option value="budget2">
                              $100,000 to $500,000
                            </option>
                            <option value="budget3">More than $500,000</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group mb-3">
                          <select
                            className="form-control form-select"
                            name="country"
                            id="country"
                            required=""
                            data-msg="Please select your country."
                          >
                            <option value="" selected="" disabled="">
                              País
                            </option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">
                              Bolivia, Plurinational State of
                            </option>
                            <option value="BQ">
                              Bonaire, Sint Eustatius and Saba
                            </option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">
                              British Indian Ocean Territory
                            </option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">
                              French Southern Territories
                            </option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">
                              Heard Island and McDonald Islands
                            </option>
                            <option value="VA">
                              Holy See (Vatican City State)
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran, Islamic Republic of
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">
                              Lao People's Democratic Republic
                            </option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">
                              Macedonia, the former Yugoslav Republic of
                            </option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">
                              Micronesia, Federated States of
                            </option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">
                              Saint Helena, Ascension and Tristan da Cunha
                            </option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">
                              Saint Martin (French part)
                            </option>
                            <option value="PM">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="VC">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">
                              Sint Maarten (Dutch part)
                            </option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">
                              Venezuela, Bolivarian Republic of
                            </option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <textarea
                            className="form-control"
                            name="textarea"
                            placeholder="Cuéntenos más sobre su proyecto, necesidades y presupuesto"
                            style={{ height: 120 }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="checkbox"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="flexCheckChecked"
                          >
                            Sí, me gustaría recibir ocasionalmente correos
                            electrónicos de marketing. Tengo derecho a excluirme
                            en cualquier momento.
                            <Link id="link" href="#">Ver la política de privacidad</Link>.
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 d-block w-100"
                        >
                          Empezar a trabajar
                        </button>
                        <input
                          type="hidden"
                          name="_captcha"
                          defaultValue="false"
                        />
                        <input
                          type="hidden"
                          name="_next"
                          defaultValue="www.swarmtech.com.mx/"
                        />
                      </div>
                    </div>
                  </form>
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5" />
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5" />
        </div>
      </section>
    </>
  );
};

export default RegisterProyect;