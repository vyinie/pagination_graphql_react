export default function PageLink({
  isCurrentPage,
  pagNum,
  currentPageHandler,
  isAvailable,
}: {
  isAvailable: number;
  isCurrentPage: boolean;
  pagNum: number;
  currentPageHandler: () => void;
}) {
  if (isAvailable) {
    return (
      <div
        onClick={currentPageHandler}
        key={pagNum}
        data-current-page={isCurrentPage}
        className="grid h-7 w-7 cursor-pointer place-items-center rounded transition hover:bg-neutral-500 hover:font-bold data-[current-page=true]:bg-neutral-500"
      >
        {pagNum}
      </div>
    );
  }
  return (
    <div className="grid h-7 w-7 cursor-default place-items-center">...</div>
  );
}
