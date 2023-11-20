import React from "react";

export const PlanCard = ({ name, description, price }) => {
    return (
        <div className="card w-100 mb-5 ">
            <div className="card-body bg-default p-3 d-flex h-auto">
                <div className="col-6">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-light fs-2 fst-italic my-3">{name}</h2>
                            </div>
                            <div className="col-12">
                                <p className="text-light fs-4">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-end">
                    <p className="fs-1 text-light">${price}</p>
                </div>
            </div>
        </div>
    );
};
