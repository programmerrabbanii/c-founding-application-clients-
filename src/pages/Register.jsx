const Register = () => {
    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value;
        const password=e.target.email.value;
        const allRegister={name,photo,email,password}
        console.log(allRegister);

    }
  return (
    <div>
          <div className="card bg-base-100 w-8/12 mx-auto mt-2 shrink-0 shadow-2xl">
            <h2 className="text-3xl text-center py-5 ">Resiter Now</h2>
            <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#00D9E9]">Registere</button>
              </div>
            </form>
          </div>
        </div>
  );
};

export default Register;
