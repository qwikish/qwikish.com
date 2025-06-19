"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Edit3,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface FormData {
  dob: string;
  gender: string;
  profession: string;
  customProfession: string;
  source: string;
}

interface FormErrors {
  dob?: string;
  gender?: string;
  profession?: string;
  customProfession?: string;
  source?: string;
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    dob: "",
    gender: "",
    profession: "",
    customProfession: "",
    source: "",
  });
  const navigate = useNavigate();

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user makes selection
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const professions = [
    "Student",
    "Software Developer",
    "Designer",
    "Product Manager",
    "Data Scientist",
    "Marketing Professional",
    "Entrepreneur",
    "Consultant",
    "Other",
  ];

  const sources = [
    "Friend or Colleague",
    "Social Media",
    "Google Search",
    "Tech Blog/Forum",
    "Advertisement",
    "App Store",
    "Other",
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.dob) {
          newErrors.dob = "Date of birth is required";
        } else {
          const today = new Date();
          const birthDate = new Date(formData.dob);
          const age = today.getFullYear() - birthDate.getFullYear();
          if (age < 10) {
            newErrors.dob = "You must be at least 10 years old";
          }
        }
        if (!formData.gender) {
          newErrors.gender = "Please select your gender";
        }
        break;
      case 2:
        if (!formData.profession) {
          newErrors.profession = "Please select your profession";
        }
        if (
          formData.profession === "Other" &&
          !formData.customProfession.trim()
        ) {
          newErrors.customProfession = "Please specify your profession";
        }
        break;
      case 3:
        if (!formData.source) {
          newErrors.source = "Please tell us how you heard about us";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps + 1));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStep(5); // Show welcome message
      setTimeout(() => navigate("/app"), 3000);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStepTitle = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Professional Background";
      case 3:
        return "How You Found Us";
      case 4:
        return "Review Your Information";
      case 5:
        return "Welcome!";
      default:
        return "";
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3">
              <Label htmlFor="dob" className="text-sm font-medium">
                Date of Birth
              </Label>
              <Input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className={cn(
                  "w-full transition-colors",
                  errors.dob &&
                    "border-destructive focus-visible:ring-destructive"
                )}
                max={new Date().toISOString().split("T")[0]}
              />
              {errors.dob && (
                <p className="text-sm text-destructive">{errors.dob}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Gender</Label>

              <Select
                value={formData.gender}
                onValueChange={(value) => handleSelectChange("gender", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  {["male", "female", "other"].map((gender) => (
                    <SelectItem
                      key={gender}
                      value={gender}
                      className="capitalize"
                    >
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {errors.gender && (
                <p className="text-sm text-destructive">{errors.gender}</p>
              )}
            </div>
          </CardContent>
        );

      case 2:
        return (
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Profession</Label>
              <Select
                value={formData.profession}
                onValueChange={(value) =>
                  handleSelectChange("profession", value)
                }
              >
                <SelectTrigger
                  className={cn(
                    "w-full",
                    errors.profession &&
                      "border-destructive focus:ring-destructive"
                  )}
                >
                  <SelectValue placeholder="Select your profession" />
                </SelectTrigger>
                <SelectContent>
                  {professions.map((prof) => (
                    <SelectItem key={prof} value={prof}>
                      {prof}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.profession && (
                <p className="text-sm text-destructive">{errors.profession}</p>
              )}
            </div>

            {formData.profession === "Other" && (
              <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                <Label
                  htmlFor="customProfession"
                  className="text-sm font-medium"
                >
                  Please specify your profession
                </Label>
                <Input
                  id="customProfession"
                  name="customProfession"
                  value={formData.customProfession}
                  onChange={handleChange}
                  placeholder="Enter your profession"
                  className={cn(
                    "w-full",
                    errors.customProfession &&
                      "border-destructive focus-visible:ring-destructive"
                  )}
                />
                {errors.customProfession && (
                  <p className="text-sm text-destructive">
                    {errors.customProfession}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        );

      case 3:
        return (
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                How did you hear about us?
              </Label>
              <Select
                value={formData.source}
                onValueChange={(value) => handleSelectChange("source", value)}
              >
                <SelectTrigger
                  className={cn(
                    "w-full",
                    errors.source && "border-destructive focus:ring-destructive"
                  )}
                >
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {sources.map((src) => (
                    <SelectItem key={src} value={src}>
                      {src}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.source && (
                <p className="text-sm text-destructive">{errors.source}</p>
              )}
            </div>
          </CardContent>
        );

      case 4:
        return (
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-sm font-medium text-muted-foreground">
                  Date of Birth
                </span>
                <span className="font-medium">
                  {new Date(formData.dob).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-sm font-medium text-muted-foreground">
                  Gender
                </span>
                <span className="font-medium capitalize">
                  {formData.gender}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-sm font-medium text-muted-foreground">
                  Profession
                </span>
                <span className="font-medium">
                  {formData.profession === "Other"
                    ? formData.customProfession
                    : formData.profession}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-muted-foreground">
                  How you found us
                </span>
                <span className="font-medium">{formData.source}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
                size="lg"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Information
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Complete Setup"
                )}
              </Button>
            </div>
          </CardContent>
        );

      case 5:
        return (
          <CardContent className="text-center space-y-6 p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Welcome to Qwikish!</h2>
                <p className="text-muted-foreground">
                  Your account has been successfully created.
                </p>
                <p className="text-sm text-muted-foreground">
                  Redirecting you to the dashboard in a few seconds...
                </p>
              </div>
            </div>
          </CardContent>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-muted/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="relative inline-block">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Qwikish
              </h1>
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-0 text-xs font-medium shadow-sm"
              >
                v1
              </Badge>
            </div>

            {step <= totalSteps && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    Step {step} of {totalSteps}
                  </span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <CardTitle className="text-xl font-semibold">
              {getStepTitle(step)}
            </CardTitle>
          </CardHeader>

          {renderStep()}

          {step <= totalSteps && step !== 4 && (
            <div className="flex justify-between p-6 pt-0 gap-3">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
                size="lg"
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={nextStep} size="lg" className="flex-1">
                {step === totalSteps ? "Review" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
