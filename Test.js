import React from "react";

function Test2({ data }) {
    return (
        <div>
            <h3>داده‌های دریافت‌شده:</h3>
            {data ? (
                <div>
                    {(() => {
                        const items = [];
                        for (let i = 0; i < data.length; i++) {
                            items.push(<p key={i}>{data[i].id}</p>);
                            items.push(<p key={i}>{data[i].name}</p>);
                            items.push(<p key={i}>{data[i].nationalcode}</p>);
                            items.push(<hr></hr>);
                        }
                        return items;
                    })()}
                </div>
            ) : (
                <p>هیچ داده‌ای موجود نیست.</p>
            )}
        </div>
    );
}

export default Test2;
