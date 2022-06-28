import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';
import { Link } from 'components';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-success">
					<div className="container-fluid">
							<NavLink href="/" exact className="navbar-brand">NEXTJS PAGE</NavLink>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
							  <span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
									<NavLink href="/account/login" className="nav-link active" aria-current="page">Login</NavLink>
									</li>
									<li className="nav-item">
									<NavLink href="/account/register" className="nav-link">Register</NavLink>

									</li>
							</ul>
							</div>
					</div>
        </nav>
    );
    
    return (
				 <nav className="navbar navbar-dark navbar-expand-lg bg-success">
				 <div className="container-fluid">
						 <a className="navbar-brand">NEXTJS PAGE</a>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						 <div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
									<NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
									</li>
									<li className="nav-item">
									<a onClick={logout} className="nav-item nav-link">Logout</a>								 
									</li>
							</ul>
						</div>
				 </div>
			 </nav>
    );
}