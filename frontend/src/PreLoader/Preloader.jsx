import React from 'react';
import './PreLoader.css';

const Preloader = () => {
    return (
        <>
            <div className="loadercontainer">
                <div className="top">
                    <div className="square">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="square">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left">
                    <div className="square">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="square">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Preloader
