import React, {useState, useEffect, useMemo} from 'react'
import Select from 'react-select'
import './Search.css' ;
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// $('.datepicker1').attr("placeholder","Check In");

const customStyles = {
  
  control: (base, state) => ({
    ...base,
    background: "none",
    border: 'none',
    color: 'black'
    // match with the menu
  }),
}

const options1 = [
  { value: 'return', label: 'Return'},
  { value: 'one-way', label: 'One-way'},
  { value: 'multi-city', label: 'Multi-city'},
  { value: 'nomad', label: 'Nomad'}
]
const options2 = [
  { value: 'economy', label: 'Economy'},
  { value: 'premium-economy', label: 'Premium Economy'},
  { value: 'Business', label: 'Business'},
  { value: 'first-class', label: 'First Class'}
]

const Search = () => {
  const [value, setValue] = React.useState(2);

  const options = useMemo(() => countryList().getData(), [])

  const [countFlight, setCountFlight] = useState(['return'])


  // useEffect(() => {
  //   var timer = setTimeout(() => {
  //     $('.main-search-div').css('display', 'block') 
  //     $('.play-video').css('display', 'none') 
  //   }, 30000);
  //   // clearTimeout(timer)
  // }, [])


  const setNoOfFlight = (option) => {
    console.log(option)
    setCountFlight(option.value)
  }

  const showTextNow = () => {
    setShowText(true)
  }

  const notShow = () => {
    setShowText(false)
  }

  const [showText, setShowText] = useState(false)

  const [startDate, setStartDate] = useState(new Date());


  function clickDepartureHandle(e) {
    setDeparture(e);
    // setShouldOpen(true);
    // document.getElementById("return-trip").setAttribute("open", "true"); 
  }

  function clickReturnHandle(e) {
    setReturnDate(e);
    // setShouldOpen(false);
  }
  
    const [departure, setDeparture] = useState('');
    const [returnDate, setReturnDate] = useState('');
    // const [shouldOpen, setShouldOpen] = useState('true');
    
  return (
    <>
    <div className='container search'>
    <Tabs>
    <TabList>
      <Tab>Holidays</Tab>
      <Tab>Hotels</Tab>
      <Tab>Flights</Tab>
    </TabList>

    <TabPanel>
        <div className='main-search-div'>
          <div className='row mt-3'>
              <div className='col-3'>
                <Select options={options}
                className='shadow1'
                  placeholder={<div className='placeHolder'>Where are you going</div>}
                  components={{
                    IndicatorSeparator: () => null
                  }} />
              </div>
              {/* <div className='col-3'>
                <Select options={options}
                  placeholder={<div className='placeHolder'>Destination City</div>}
                  components={{
                    IndicatorSeparator: () => null
                  }} />
              </div> */}
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Check-in</div>
                </div>
              </div>
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Check-out</div>
                </div>
              </div>
              <div className='col-3'>
              <div class="dropdown shadow1">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown">
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'>Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              <button style={{ marginLeft: '16px', marginTop: '-5px'}} className='btn btn-primary'>Search</button>
              </div>
              <div className='col-1 pl-0'>
                
              </div>
          </div>
        </div>
    </TabPanel>
    <TabPanel>
    <div className='main-search-div'>
          <div className='row mt-3'>
              <div className='col-3'>
                <Select options={options}
                className='shadow1'
                  placeholder={<div className='placeHolder'>Where are you going</div>}
                  components={{
                    IndicatorSeparator: () => null
                  }} />
              </div>
              {/* <div className='col-3'>
                <Select options={options}
                  placeholder={<div className='placeHolder'>Destination City</div>}
                  components={{
                    IndicatorSeparator: () => null
                  }} />
              </div> */}
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Departure Date</div>
                </div>
              </div>
              <div className="col-3">
                <div className='datepicker-div'>
                  <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                  <div className='departure-datepicker'>Return Date</div>
                </div>
              </div>
              <div className='col-3'>
              <div class="dropdown shadow1">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown">
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'>Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'>Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              <button style={{ marginLeft: '16px', marginTop: '-5px'}} className='btn btn-primary'>Search</button>
              </div>
              <div className='col-1 pl-0'>
                
              </div>
          </div>
        </div>
    </TabPanel>
    <TabPanel>
      <div className='main-search-div'>
            <div className='row'>
                <div className='col-12'>
                  <button className='trip-side-count'>One-way</button>
                  <button className='trip-side-count'>Round-trip</button>
                  <button className='trip-side-count'>Multi-city</button>

                    {/* <Select styles={customStyles} options={options1}
                    className='shadow1'
                    id='trip_way'
                    placeholder={<div className='placeHolder '>Return</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={setNoOfFlight} /> */}
                </div>
                {/* <div className='col-2'>
                  <Select styles={customStyles} options={options2}
                  className='shadow1'
                    id='trip_class'
                    placeholder={<div className='placeHolder '>Premium</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div> */}
            </div>
            <div className='row mt-3'>
                <div className='col-3 position-relative'>
                  <Select options={options}
                  className='shadow1'
                    placeholder={<div className='placeHolder'>From<br/> <span style={{ color: '#1d1d1d', fontWeight: '600'}}>New Delhi, India ( DEL )</span></div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                    <button className='both-side-indicator'>
                      <svg viewBox="0 0 24 24"><path d="m17 4-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path></svg>
                    </button>
                </div>
                <div className='col-3'>
                  <Select options={options}
                  className='shadow1 increase-height'
                  style={{ height: '100%' }}
                    placeholder={<div className='placeHolder'>To</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div>
                {countFlight=='return'?
                <div className="col">
                  <div className='position-relative flight-div'>
                    <DateRangePicker  placeholder='gr' className='datepicker1' IndicatorSeparator={false} onShowCalendar={showTextNow} onHide={notShow}>
                        <input type="text" className="form-control datepickerinput shadow1" style={{ height: '100%' }} />
                    </DateRangePicker>
                    <div className='text-on-input'>
                      Departure Return
                    </div>
                    {showText?<p className='position-absolute departure-text'>
                      Departure
                      </p>:''}
                    {/* <p className='position-absolute flight-symbol'>&#8594;</p> */}
                    {showText?<p className='position-absolute return-text'>Return</p>:''}
                  </div>
                </div>:
                <div className="col-4">
                  <div className='datepicker-div'>
                    <DatePicker className='simple-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <div className='departure-datepicker'>Departure</div>
                  </div>
                </div>
                }
                
            </div>
            <div className='row mt-4'>
              <div className='col-6 flight-last-row'>
                <input type="checkbox" className='direct-flight' id="direct-flight" name="direct-flight" value="direct-flight"/>
                <label for="direct-flight"> Direct flight only</label>
              </div>
              <div className='col-2'>
              <div class="dropdown shadow1">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                <label for="my-dropdown"
                  data-toggle="dropdown">
                2 adults 0 child
                </label>
                <ul className='adult_child'>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-male" aria-hidden="true"></i> Adults</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class="fa fa-child" aria-hidden="true"></i> Children</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                    <label className='make-heavy-font'><i class='fas fa-hotel'></i> Rooms</label> 
                    <div class="quantity buttons_added">
                      <input type="button" value="-" class="minus"/>
                      <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                      <input type="button" value="+" class="plus" />
                    </div>
                  </li>
                  <li>
                      <input type='text' className='form-control' placeholder="Child's Age"  />
                  </li>
                </ul>
              </div>
              </div>
              <div className='col-2'>
                <Select styles={customStyles} options={options2}
                    className='shadow1'
                    id='trip_way'
                    placeholder={<div className='placeHolder '>Economy</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={setNoOfFlight} />
              </div>
                <div className='col-2 d-flex justify-content-end'>
                  <button className='btn btn-primary'>Search</button>
                </div>
            </div>
          </div>
    </TabPanel>
  </Tabs>

      {/* <div className='searchCard'>
        
        
      </div> */}
    </div>
  </>
  )
}

export default Search