import {
  isValidRowsSize,
  isValidColumnSize,
  RowsSizeQueryInUrlAllowedDefinedValues,
  RowsSizeQueryInUrlKayName,
  ColumnsSizeQueryInUrlAllowedDefinedValues,
  ColumnsSizeQueryInUrlKayName,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import { getValueFromUrlQueryTypeGuard } from "../../../utilities/getValueFromUrlQueryTypeGuard";
import tryConvertToFiniteNumberNullAsNull from "../../../utilities/tryConvertToFiniteNumberNullAsNull";

interface XSizeProps {
  keyName: RowsSizeQueryInUrlKayName;
  defaultValue: RowsSizeQueryInUrlAllowedDefinedValues;
  validationFn: typeof isValidRowsSize;
}
interface YSizeProps {
  keyName: ColumnsSizeQueryInUrlKayName;
  defaultValue: ColumnsSizeQueryInUrlAllowedDefinedValues;
  validationFn: typeof isValidColumnSize;
}

type SizeProps = XSizeProps | YSizeProps;

function getSizeFromUrl(
  searchParams: URLSearchParams,
  sizeProps: XSizeProps
): RowsSizeQueryInUrlAllowedDefinedValues;
function getSizeFromUrl(
  searchParams: URLSearchParams,
  sizeProps: YSizeProps
): ColumnsSizeQueryInUrlAllowedDefinedValues;
function getSizeFromUrl(searchParams: URLSearchParams, sizeProps: SizeProps) {
  const size = getValueFromUrlQueryTypeGuard(
    tryConvertToFiniteNumberNullAsNull(searchParams.get(sizeProps.keyName)),
    sizeProps.defaultValue,
    sizeProps.validationFn
  );

  return size;
}

export default getSizeFromUrl;
