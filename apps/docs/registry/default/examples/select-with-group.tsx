import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function SelectWithGroup() {
  return (
    <Select>
      <SelectTrigger className="max-w-40">
        <SelectValue placeholder="Select a job" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Technology</SelectLabel>
          <SelectItem value="software-engineer">Software Engineer</SelectItem>
          <SelectItem value="data-scientist">Data Scientist</SelectItem>
          <SelectItem value="ux-designer">UX Designer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Business</SelectLabel>
          <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
          <SelectItem value="financial-analyst">Financial Analyst</SelectItem>
          <SelectItem value="hr-specialist">HR Specialist</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
