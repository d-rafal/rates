import {
  isValidXSize,
  isValidYSize,
  XSizeQueryInUrlAllowedDefinedValues,
  XSizeQueryInUrlKayName,
  YSizeQueryInUrlAllowedDefinedValues,
  YSizeQueryInUrlKayName,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import { getValueFromUrlQueryTypeGuard } from "../../../utilities/getValueFromUrlQueryTypeGuard";
import tryConvertToFiniteNumberNullAsNull from "../../../utilities/tryConvertToFiniteNumberNullAsNull";

interface XSizeProps {
  keyName: XSizeQueryInUrlKayName;
  defaultValue: XSizeQueryInUrlAllowedDefinedValues;
  validationFn: typeof isValidXSize;
}
interface YSizeProps {
  keyName: YSizeQueryInUrlKayName;
  defaultValue: YSizeQueryInUrlAllowedDefinedValues;
  validationFn: typeof isValidYSize;
}

type SizeProps = XSizeProps | YSizeProps;

function getSizeFromUrl(
  searchParams: URLSearchParams,
  sizeProps: XSizeProps
): XSizeQueryInUrlAllowedDefinedValues;
function getSizeFromUrl(
  searchParams: URLSearchParams,
  sizeProps: YSizeProps
): YSizeQueryInUrlAllowedDefinedValues;
function getSizeFromUrl(searchParams: URLSearchParams, sizeProps: SizeProps) {
  const size = getValueFromUrlQueryTypeGuard(
    tryConvertToFiniteNumberNullAsNull(searchParams.get(sizeProps.keyName)),
    sizeProps.defaultValue,
    sizeProps.validationFn
  );

  return size;
}

export default getSizeFromUrl;
