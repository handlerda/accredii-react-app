import React from "react";
import Bridge from "../Controls/Bridge";
import Paper from "../Paper";
import TableHead from "./TableHead";
import TableHeadRow from "./TableHeadRow";
import TableRow from "./TableRow";
import TableRowData from "./TableRowData";

//take in head rows and data

function Table({ tableHeads, tableRows, keys }) {
  // const docs = data.data.docs;
  // console.log(docs);
  return (
    <Paper>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <TableHead>
                  {tableHeads.map((head) => {
                    return <TableHeadRow name={head.name} />;
                  })}
                </TableHead>
                {tableRows.map((column) => {
                  return (
                    <TableRow>
                      {console.log(`here come the keys`, keys)}
                      {keys.map((key) => {
                        return <TableRowData name={column[key]} />;
                      })}
                    </TableRow>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Table;