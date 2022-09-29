export default function PaymentData(props: any) {
  return (
    <div className="container bg-white mt-5">
        <div className="row">
          <div className="col p-3 d-flex align-items-center">
            <img src={require(`../assets/img/credit-card.svg`).default} alt="card icon" />
            <div className="ms-2 text-start">
              <h5 className="mb-0 fw-light">Hasta 48 cuotas</h5>
              <a className="text-primary pe-auto text-decoration-none" href="./">ver más</a>
            </div>
          </div>
          <div className="col-4 p-3 d-flex align-items-center">
            <img src={require(`../assets/img/transfer.svg`).default} alt="card icon" />
            <div className="ms-2 text-start">
              <h5 className="mb-0 fw-light">Transferencia desde tu banco</h5>
              <a className="text-primary pe-auto text-decoration-none" href="./">ver más</a>
            </div>
          </div>
          <div className="col p-3 d-flex align-items-center">
            <img src={require(`../assets/img/payment-agreement.svg`).default} alt="card icon" />
            <div className="ms-2 text-start">
              <h5 className="mb-0 fw-light">Paga en efectivo</h5>
              <a className="text-primary pe-auto text-decoration-none" href="./">ver más</a>
            </div>
          </div>
          <div className="col-3 p-3 d-flex align-items-center border-start">
            <img src={require(`../assets/img/view-more.svg`).default} alt="card icon" />
            <div className="ms-2 text-start">
              <h5 className="mb-0 fw-light">Más medios de pago</h5>
              <a className="text-primary pe-auto text-decoration-none" href="./">ver más</a>
            </div>
          </div>
        </div>
      </div>
  );
}