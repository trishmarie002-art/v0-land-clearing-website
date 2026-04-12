import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Forward the form data to FormGrid
    const response = await fetch("https://formgrid.dev/api/f/c30xdwys", {
      method: "POST",
      body: formData,
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      const errorText = await response.text()
      console.error("[v0] FormGrid error:", errorText)
      return NextResponse.json(
        { success: false, error: "Form submission failed" },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
