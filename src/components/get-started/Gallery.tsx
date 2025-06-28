import { ChevronDown, Upload } from "lucide-react";
import { Input } from "../ui/input";

const Gallery = () => {
  return (
    <>
      <div className="rounded-[14px] font-medium border border-[#E0E0E0]">
        <h4 className="font-semibold text-lg border-b border-[#E0E0E0] px-4 py-3.5">
          Property gallery
          <span className="text-[#6F6C6A]">(Its not unit photo)*</span>
        </h4>
        <div className="px-4 py-3.5 flex gap-6">
          <div>
            <h4 className="font-semibold">
              Featured photos <span className="text-[#FF6A62]">*</span>
            </h4>
            <div className="flex gap-2 w-full">
              <div className="relative h-40 w-54 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
                  <div className="border flex justify-center items-center size-9 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-6" />
                  </div>
                  <span className="font-semibold">Upload cover photo</span>
                  <span className="text-[#6F6C6A] font-semibold text-[10px]">
                    (Jpg, png only)
                  </span>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                      <Upload className="size-4" />
                    </div>
                  </div>

                  <Input
                    id="image"
                    type="file"
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                    className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                    required
                  />
                </div>
                <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                      <Upload className="size-4" />
                    </div>
                  </div>

                  <Input
                    id="image"
                    type="file"
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                    className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                    required
                  />
                </div>
                <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                      <Upload className="size-4" />
                    </div>
                  </div>

                  <Input
                    id="image"
                    type="file"
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                    className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                    required
                  />
                </div>
                <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                      <Upload className="size-4" />
                    </div>
                  </div>

                  <Input
                    id="image"
                    type="file"
                    accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                    className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {/* more photos */}
          <div>
            <h4 className="font-semibold">
              More photos <span className="text-[#6F6C6A]">(Optional)</span>
            </h4>

            <div className="grid gap-2 grid-cols-1 sm:grid-cols-4">
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
              <div className="relative h-19 w-25 border border-dashed border-[#316EED] rounded-lg bg-[#F6F9FF] cursor-pointer">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="border flex justify-center items-center size-7 rounded-[6px] border-dashed border-[#316EED]">
                    <Upload className="size-4" />
                  </div>
                </div>

                <Input
                  id="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  className="size-full opacity-0 cursor-pointer absolute top-0 left-0"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[14px] flex justify-between mt-5 font-medium border px-4 py-3.5 border-[#E0E0E0]">
        <h4 className="font-semibold text-lg">
          Videos
          <span className="text-[#6F6C6A]">(Optional)*</span>
        </h4>

        <ChevronDown className="border-black border rounded-full size-5" />
      </div>
    </>
  );
};

export default Gallery;
