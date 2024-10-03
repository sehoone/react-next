export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div id="delete-confirmation" className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Are you sure?</h2>
      <p className="mb-4">Do you really want to remove this place?</p>
      <div id="confirmation-actions" className="flex justify-end space-x-2">
        <button onClick={onCancel} className="button-text text-gray-700 hover:text-gray-900">
          No
        </button>
        <button onClick={onConfirm} className="button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Yes
        </button>
      </div>
    </div>
  );
}