import React from "react";
import Paper from "../Paper";
import TableHead from "./TableHead";
import TableHeadRow from "./TableHeadRow";
import TableRow from "./TableRow";
import TableRowData from "./TableRowData";

//take in head rows and data

function Table({ data }) {
  const docs = data.data.docs;
  console.log(docs);
  return (
    <Paper>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <TableHead>
                  <TableHeadRow name="Document Title" />
                  <TableHeadRow name="Company" />
                  <TableHeadRow name="Law Firm" />
                  <TableHeadRow name="Attorney" />
                  <TableHeadRow name="Status" />
                </TableHead>
                {/* <TableRow>
                  <TableRowData name="Davis" bold />
                  <TableRowData name="Davis" />
                </TableRow>
                <TableRow>
                  <TableRowData name="Davis" bold />
                  <TableRowData name="Davis" />
                </TableRow> */}
                {docs.map((document) => {
                  return (
                    <TableRow>
                      <TableRowData name={document.title} bold />
                      <TableRowData name={document.company_name} />
                      <TableRowData name={document.lawfirm_name} />
                      <TableRowData name={document.attorney_name} />
                      <TableRowData name={document.status} bold />
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
