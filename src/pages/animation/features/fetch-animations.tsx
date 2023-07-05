import { FC, useState, useContext, useEffect } from "react";
import { useFetchAnimations } from "../../../hooks/useAnimations";
import { parseDate } from "../../../shared/utils/parseDate";
import { AnimationContext } from "../context/animation-context";
import ModalEditAnimation from "./modal-edit-animations";
import { AnimationDetail } from "../../../shared/types/animation-types";

interface Props {}

const FetchAnimations: FC<Props> = ({}) => {
  const { animations, searchByName } = useContext(AnimationContext);
  // console.log(animations.);
  // searchByName.
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [animationDetail, setAnimationDetail] = useState<
    AnimationDetail | undefined
  >();
  const [isCreateSuccess, setIsUpdateSuccess] = useState(false);

  const handleClose = () => setIsOpenEdit(false);
  const handleEdit = (animation: any) => {
    setIsOpenEdit(true);
    setAnimationDetail(animation);
    console.log("detail", animation);
  };

  return (
    <>
      <div className="grid grid-cols-4 mt-5 gap-5 overflow-y-auto max-h-[calc(100vh-200px-130px)] pr-4">
        {animations &&
          animations
            .filter((item: any) =>
              item.name.toLowerCase().includes(searchByName.toLowerCase())
            )
            .map((item: any, index: number) => (
              <div
                key={index}
                className="bg-primary rounded w-full p-5 relative"
              >
                <div
                  className="relative w-full h-80 cursor-pointer"
                  onClick={() => handleEdit(item)}
                >
                  <img
                    src={item.avatar.path}
                    alt="Pic 1"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                      height: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-4 mb-2">
                  <p className="whitespace-nowrap overflow-hidden overflow-ellipsis w-24">
                    {item.name}
                  </p>
                </div>
                <div className="mt-3 text-gray-500 text-sm">
                  Download: {item.downloadCount}
                </div>
                <div className="mt-3 text-gray-500 text-sm">
                  Priority: {item.priority}
                </div>
                <div className="mt-3 text-red-500 text-sm">
                  Time: {parseDate(item.createdAt)}
                </div>
              </div>
            ))}
      </div>

      {isOpenEdit && (
        <ModalEditAnimation
          setIsUpdateSuccess={setIsUpdateSuccess}
          isOpenEdit={isOpenEdit}
          handleClose={handleClose}
          animationDetail={animationDetail}
        />
      )}
    </>
  );
};

export default FetchAnimations;