import { templates } from "@/config/templates";

export const generateTemplateName = (templateId: string) => {
  return `${
    templates.find((template) => template.id === templateId)?.name
  } Template`;
};

export const getRepoNameByTemplateId = (templateId: string) => {
  return templates.find((template) => template.id === templateId)?.repoName;
};

export const isTemplateValid = (templateId: string) => {
  return templates.some((template) => template.id === templateId);
};
