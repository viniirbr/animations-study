import './App.scss'

function App() {

	return (
		<div className="App">
			<section>
				<h2>Button Transition</h2>
				<button className='button-transition'>Transition CSS</button>
			</section>
			<section>
				<h2>Expanding List</h2>
				<ul className='dropdown'>
					<li>Dropdown menu
						<span>
							<svg xmlns="http://www.w3.org/2000/svg"
								width="192"
								height="192"
								fill="#000000"
								viewBox="0 0 256 256"><rect
									width="256"
									height="256"
									fill="none"></rect><polyline
										points="208 96 128 176 48 96"
										fill="none"
										stroke="#000000"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="16"></polyline>
							</svg>
						</span>
					</li>
					<ul className='dropdown-menu'>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</ul>
			</section>
			<section>
				<h2>Valid input</h2>
				<input type="email" name="" id="" className='input-state'/>
			</section>
			<section>
				<h2>Border Animation</h2>
				<div className='border'>

				</div>
			</section>
		</div>
	)
}

export default App
