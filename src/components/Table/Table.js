import React from "react";

export const Table = (props) => {

    const { columns, rows } = props;

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                    {
                        columns?.map(headerTitle => <th scope="col">{ headerTitle }</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows?.map(row => 
                        <tr>
                            {row?.map(cell => <td>{ cell }</td>)}
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}