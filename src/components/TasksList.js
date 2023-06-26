import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from 'react-router-dom';

export function TasksList({ get, setGet, setData }) {


    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, []);

    let loadData = async () => {
        setLoading(true)
        let res = await axios.get(`https://nutz-email-backend-tawny.vercel.app/emails`);
        setGet(res.data)
        setLoading(false)

    }


    const viewTask = (task) => {

        setData(task)
    }


    return (
        <div>
            {
                isLoading ? <div className="loading"> Loading... <div class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div> </div> : <div> <div className="refresh"><button type="button" class="btn btn-primary btn-lg"><a href="/" style={{ color: "white", textDecoration: "none" }}> Refresh </a></button></div> <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th>ID</th>
                            <th>From</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            get.map((task, index) => {
                                return (
                                    <tr className='text-center' key={task.id}>
                                        <td>{task.id}</td>

                                        <td>{task.from}</td>
                                        <td>{task.subject}</td>
                                        <td>{task.date}</td>
                                        <td>
                                            <Link to="/inbox" style={{ textDecoration: "none" }}><Button variant="warning" className='mx-3' onClick={() => viewTask(task)}><i class="bi bi-envelope-open">  View </i></Button> </Link>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

                </div>
            }



        </div>
    )
}
