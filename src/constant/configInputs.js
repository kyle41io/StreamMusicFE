import IcCard from "@/assets/icons/IcCard";
import IcPerson from "@/assets/icons/IcPerson";
import IcLock from "@/assets/icons/IcLock";
import IcKey from "@/assets/icons/IcKey";

export const INPUT_SIGN_UP = [
  {
    id: "displayName",
    type: "text",
    placeholder: "display_name",
    icon: <IcCard />,
    errorMessage: "Display name must have 6-32 characters",
    setState_key: "setDisplayName",
    isError_key: "isErrorDisplayName",
    validate_keys: ["rgDisplayName"],
  },
  {
    id: "userName",
    type: "text",
    placeholder: "username",
    icon: <IcPerson />,
    errorMessage: "Username must have 5-32 characters",
    setState_key: "setUserName",
    isError_key: "isErrorUserName",
    validate_keys: ["rgUserName"],
  },
  {
    id: "password",
    type: "password",
    placeholder: "password",
    icon: <IcLock />,
    errorMessage:
      "Password must have 1 uppercase, 1 special character, 1 number and 8-32 characters",
    setState_key: "setPassword",
    isError_key: "isErrorPassword",
    validate_keys: ["rgPassWord"],
  },
  {
    id: "repeatPassword",
    type: "password",
    placeholder: "repeat_password",
    icon: <IcKey />,
    errorMessage:
      "Please make Please make sure that you have correctly repeated your password!",
    setState_key: "setRepeatPassword",
    isError_key: "isErrorRepeatPassword",
    validate_keys: ["rgPassword", "repeatPassword"],
  },
];

export const SIGN_IN_INPUTS = [
  {
    id: "userName",
    type: "text",
    placeholder: "username",
    icon: <IcPerson />,
    errorMessage: "Username must have 5-32 characters",
    setState_key: "setUserName",
    isError_key: "isErrorUserName",
    validate_keys: ["rgUserName"],
  },
  {
    id: "passWord",
    type: "password",
    placeholder: "password",
    icon: <IcLock />,
    errorMessage:
      "Password must have 1 uppercase, 1 special character, 1 number and 8-32 characters",
    setState_key: "setPassword",
    isError_key: "isErrorPassword",
    validate_keys: ["rgPassword"],
  },
];

export const VALIDATE_OPTIONS = [
  {
    key: "rgDisPlayName",
    validateBy: (value) => !!value.match(/^.{6,32}$/),
  },
  {
    key: "rgUserName",
    validateBy: (value) => !!value.match(/^.{5,32}$/),
  },
  {
    key: "rgPassword",
    validateBy: (value) =>
      !!value.match(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/
      ),
  },
  {
    key: "repeatPassword",
    stateRef: "password",
    validateBy: (value, stateRefValue) => value === stateRefValue,
  },
];
