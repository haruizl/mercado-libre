export default function Products(props: any) {
    return (
        <>
            <div className="container d-flex ps-0 my-4 align-items-end">
                <h3 className="mb-0 text-secondary fw-light">Basado en tu última visita</h3>
                <a className="text-primary pe-auto text-decoration-none ms-3" href="./">Ver historial</a>
            </div>
            <div className='container'>
                <div className="row text-start">
                    <div className="col">
                        <div className="card">
                            <img src={require(`../assets/img/product1.png`).default} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ 76.000</h5>
                                <p className="text-lightsuccess fw-semibold">Envío gratis</p>
                                <p className="d-none mb-0 fw-light">Camara Web 1080p Para Pc Laptop Usb Web Cam Con Microfono </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require(`../assets/img/product2.png`).default} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ 85.000</h5>
                                <p className="text-lightsuccess fw-semibold">Envío gratis</p>
                            </div>
                            <p className="d-none mb-0 fw-light">Camara Web 1080p Para Pc Laptop Usb Web Cam Con Microfono </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require(`../assets/img/product3.png`).default} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ 90.000</h5>
                                <p className="text-lightsuccess fw-semibold">
                                    Envío gratis
                                    <span className="ui-item">
                                        <svg width="41" height="13" viewBox="0 0 41 13"><path fillRule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></svg>
                                    </span>
                                </p>
                                <p className="d-none mb-0 fw-light">Camara Web 1080p Para Pc Laptop Usb Web Cam Con Microfono </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require(`../assets/img/product4.png`).default} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ 69.000</h5>
                                <p className="text-lightsuccess fw-semibold">Envío gratis</p>
                                <p className="d-none mb-0 fw-light">Camara Web 1080p Para Pc Laptop Usb Web Cam Con Microfono </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require(`../assets/img/product5.png`).default} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ 76.000</h5>
                                <p className="text-lightsuccess fw-semibold">Envío gratis</p>
                                <p className="d-none mb-0 fw-light">Camara Web 1080p Para Pc Laptop Usb Web Cam Con Microfono </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}