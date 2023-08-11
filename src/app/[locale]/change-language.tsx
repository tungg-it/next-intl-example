"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangeLanguage({ locale }: { locale: string }) {
  const router = useRouter();

  const [selectValue, setSelectValue] = useState(locale);

  const t = useTranslations("Index");

  const handelSelect = (value: string) => {
    setSelectValue(value);
    router.push(`/${value}`);
  };

  return (
    <div>
      <select
        name="locale"
        id="locale"
        value={selectValue}
        onChange={(e) => handelSelect(e.target.value)}
      >
        <option value="en">{t("en")}</option>
        <option value="vi">{t("vi")}</option>
      </select>
    </div>
  );
}
