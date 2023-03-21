import React from "react";

export const Table = (props) => {

    const { columns, rows } = props;

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                    {
                        columns?.map(header => <th scope="col">{ header }</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        
                    }
                    
                </tbody>
            </table>
        </>
    );
}