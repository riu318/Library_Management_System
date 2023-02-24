import '../styles/adminHome.css'

const AdminHome = () => {
    return (
        <div className="adminhome">
            <div className="adminhomepage">
                <div className="heading">
                    <h1>E-Book Library Blog</h1>
                </div>
            </div>
            <div className="containers">
                <div className="container1">
                    <img src="/images/backgroundimg.webp" width="100%" height="50%" alt="" />
                    <div className="content1">
                        <span>E-Book Library to Host an Evening of Broadway Cabaret</span> <br />
                        By Erika Berlin on January 12, 2023
                        <br />
                        The Friends of E-Book Library are pleased to host a special night of cabaret-style performances with How I Got to…
                        <br />
                        <a href="">Take a look</a>
                    </div>
                </div>
                <div className="container2">
                    <img src="/images/backgroundimg.webp" width="100%" height="50%" alt="" />
                        <div className="content2">
                            <span>E-Book Library to Host an Evening of Broadway Cabaret</span> <br />
                            By Erika Berlin on January 12, 2023
                            <br />
                            The Friends of E-Book Library are pleased to host a special night of cabaret-style performances with How I Got to…
                            <br />
                            <a href="">Take a look</a>
                        </div>
                </div>
                <div className="container3">
                    <img src="/images/backgroundimg.webp" width="100%" height="50%" alt="" />
                        <div className="content3">
                            <span>E-Book Library to Host an Evening of Broadway Cabaret</span> <br />
                            By Erika Berlin on January 12, 2023
                            <br />
                            The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…
                            <br />
                            <a href="">Take a look</a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;