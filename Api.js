import React, { Component } from "react";

//components
import Form1 from './components/Form1';
import Informatin from './components/Information';
import Userlist from './components/Userlist';
import Test2 from './components/Test';

class Api extends Component {
    state = {
        id: null,
        name: null,
        nationalcode: null,
        data: null, // اضافه کردن متغیر data
    };

    getname = async (e) => {
        e.preventDefault();
        const id = e.target.elements.id.value;
        const name = e.target.elements.name.value;
        const api_cell = await fetch('https://67b42e78392f4aa94fa9aaf9.mockapi.io/api/v1/users');
        console.log(api_cell);
        const data = await api_cell.json();
        console.log(data);

        // ذخیره داده‌ها در state
        this.setState({ data });
    };

    render() {
        return (
            <div>
                <Form1 getname={this.getname} />
                <Test2 data={this.state.data} /> {/* ارسال داده‌ها به Test2 */}
                <Informatin />
                <Userlist
                    id={this.state.id}
                    name={this.state.name}
                    nationalcode={this.state.nationalcode}
                />
            </div>
        );
    }
}

export default Api;
