import React from 'react'
import ChildCom from './ChildCom'

const ParentCom = () => {
    let name="Name:Kamran Awan";
    let profession="Position:Social Marketing Executive";
    let Company="Company:Abc Company";
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md border border-gray-200 text-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Props Example</h1>
        <div className="space-y-4">
          <ChildCom name={name} />
          <ChildCom profession={profession} />
          <ChildCom Company={Company} />
        </div>
      </div>
    </div>
  )
}

export default ParentCom