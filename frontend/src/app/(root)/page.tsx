'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { allTaskByUserId } from "@/lib/action/task.action"
import { useEffect, useState } from "react"

const dashboardPage = () => {
    const [ task, setTask ] = useState<Task[]>([])

    useEffect(() => {
        const getTaskData = async () => {
            const response = await allTaskByUserId();
            const data = response.data;

            setTask(data!!)
        }

        getTaskData();
    },[])

    return (
        <div className="flex flex-col items-center px-5 md:px-24">
            <Card className="w-full border-0 max-w-full sm:min-w=[520px] p-5 sm:p-5 bg-card-auth">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-semibold text-white">Data Tugas</h1>
                        <Button className="bg-add-task">
                            Tambah Tugas
                        </Button>
                    </div>
                    <div className="flex flex-row">
                        <Select>
                            <SelectTrigger className="w-[180px] bg-amber-500 text-white">
                                <SelectValue placeholder="Select a Filter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Filter by</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-gray-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Tugas
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Deskripsi
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Deadline
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Di Buat Oleh
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { task.map((data, idx) => (
                                    <tr key={idx} className="bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                            {data.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.deadline}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default dashboardPage