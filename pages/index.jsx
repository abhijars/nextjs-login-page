import { userService } from 'services';
import { Link } from 'components';

export default Home;

function Home() {
    return (
			<>
        <div className="p-4">
            <div className="container">
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
											<ul className="list-group mt-3">
												<li className="list-group-item"><strong>Name : </strong> {userService.userValue?.firstName} {userService.userValue?.lastName}</li>
												<li className="list-group-item"><strong>User Name : </strong> {userService.userValue?.username}</li>
											</ul>
                    </div>

										<div className='col-md-6 offset-md-3'>
											<div class="container-fluid p-5 mt-5 bg-success text-white text-center">
												<h1 className='text-capitalize'>Hi {userService.userValue?.firstName}!</h1>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
												<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
											</div>
										</div>

                </div>
            </div>
							
        </div>

				<div class="mt-5 p-4 bg-success text-white text-center position-fixed" style={{width:'100%', bottom:0}}>
					<p>Footer</p>
				</div>
			</>
    );
}
