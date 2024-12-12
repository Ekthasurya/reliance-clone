import React from 'react'
import HomeFirstSlider from '../Component/HomeComponent/HomeFirstSlider'
import SmartphonesSlider from '../Component/HomeComponent/SmartphonesSlider'
import SmartwatchesSingle from './SmartwatchesSingle'
import SmartwatchesSlider from '../Component/HomeComponent/SmartwatchesSlider'

const HomePage = () => {
  return (
    <div className='home-div'>
      <HomeFirstSlider/>
      <p>Best Selling audio| 3Hr Instant Delivery| 3 Months Jio Saavn Free*</p>
      <div>
      <SmartphonesSlider/>
      </div>
      <p>Avail No-cost EMI on Premium Smartwatches</p>
      <div><SmartwatchesSlider/></div>
      <div className='grid-image'>
        <img src="https://www.reliancedigital.in/medias/bau-tile-1-audio-241103.jpg?context=bWFzdGVyfGltYWdlc3wxOTg4NXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGI2LzEwMjE3OTY1Mjg5NTAyLmpwZ3wxYzMxZWI4ZmM3YTRiNzY5YzFhMWYxYjI1OTFmYzFiYzgxYmVhNzMxZjYwZDA0MWM4NzcwMGZmNzhjZGUxMDJi" alt="" />
        <img src="https://www.reliancedigital.in/medias/bau-tile-2-bose-241103.jpg?context=bWFzdGVyfGltYWdlc3wxODgzOXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDczLzEwMjE3OTY1MzU1MDM4LmpwZ3xhNDgzZTEyN2RlYTZlMWQ5YWE5ZmZhNGU1MTVlZWRmNmNmODFlNWVlMjMyYmIzNzljOGIxYWIwM2NmYmQ1YjUw" alt="" />
        <img src="https://www.reliancedigital.in/medias/bau-tile-3-sda-241103.jpg?context=bWFzdGVyfGltYWdlc3wyMDYzNnxpbWFnZS9qcGVnfGltYWdlcy9oYzAvaGYxLzEwMjE3OTY1NDIwNTc0LmpwZ3xkNzQ5ZjU5OTI0NWFhYTdiMWU1NjY5ZjNlODc1NzliMjQ4M2RhNzEwMzM0OGI5MWRiMTZmMDQ3YWIyYWI1Y2Fk" alt="" />
        <img src="https://www.reliancedigital.in/medias/bau-tile-4-storage-241103.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDhlLzEwMjE3OTY1NTg0NDE0LmpwZ3xiZTlhZjc1M2E3MzY1Zjc4OTk2NGIwZmI4YjM4ZjBlOTQyYzkzNTM1YWE4NzNhNjFlM2I2YTNmYmZiYzNjNTg1" alt="" />
        <img src="https://www.reliancedigital.in/medias/GDOE-Air-Purifiers-340x255.jpg?context=bWFzdGVyfGltYWdlc3wzMzEwM3xpbWFnZS9qcGVnfGltYWdlcy9oMjMvaGE5LzEwMjMwNzg3MjExMjk0LmpwZ3xhNWEzMWQ1NTExNWMzZjc2YmVmNjcyOGFiMDJkNzBmMzhjNGJiOGJlMmExZWEzZTkyNzlmZDQzYjkxNDM0ZTVi" alt="" />
        <img src="https://www.reliancedigital.in/medias/bau-tile-6-charger-241103.jpg?context=bWFzdGVyfGltYWdlc3wxNjIyNXxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaDRjLzEwMjE3OTY1NzgxMDIyLmpwZ3xjMmNhNmZkMjdhNTdhZTMyMDgxYWUxMmU4ZmU5MWFiMmYxNjkxZTdlNzViYmZkZDlhMDQyNzU0NmI2ZjQ5NDE5" alt="" />
        <img src="https://www.reliancedigital.in/medias/bau-tile-7-ref-241103.jpg?context=bWFzdGVyfGltYWdlc3wyMDIyOHxpbWFnZS9qcGVnfGltYWdlcy9oYjYvaDQyLzEwMjE3OTY1ODQ2NTU4LmpwZ3xkMzUyNTk2OWNiMjg0ZWUyNDI4OGFhOWVkY2ZkMTNhOTUyZjVmZWJlNmJhNmM2ZDI0ZGJjODRkYjJmNWVkYWY4" alt="" />
        <img src="https://www.reliancedigital.in/medias/Samsung-Watch-7-GDOE-BAU-340x255.jpg?context=bWFzdGVyfGltYWdlc3w0NDUxMHxpbWFnZS9qcGVnfGltYWdlcy9oYWEvaGM4LzEwMjIyOTM5MTExNDU0LmpwZ3w1NWE1ZWVhYjgwMzg5ZDQwZTM5ZjlhMTk0OGNlYjRiMDRmNjBjMGJjODYyZTc3Y2JhYWIyYTQxMDAwYzhiMDZm" alt="" />
      </div>
    </div>
  )
}

export default HomePage