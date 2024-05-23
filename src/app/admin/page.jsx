"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { adminData } from "../../data/admin";
import { columns } from "../../constants/columns";
import MButton from "@/components/Buttons/MButton";
import AddProduct from "@/components/admin/Modal"

export default function Admin() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));

  return (
    <div className="p-6">
      <AddProduct />
      <div className="flex justify-end w-full mb-4"><MButton classNam="" title="Add Product" click={() =>{}} variant="solid" color="primary"  /></div>
      <Table
        aria-label="Controlled table example with dynamic content"
        // selectionMode="multiple"
        // disabledKeys={["3", "4"]}
        // selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={adminData}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
