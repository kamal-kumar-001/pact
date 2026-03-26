import { getMongoClient } from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const payload = await request.json();

    const {
      name,
      email,
      occupation,
      habit,
      failures,
      riskMoney,
      maxRisk,
      motivation,
      desiredFeature,
      features,
    } = payload || {};

    if (!email || !riskMoney || !maxRisk || !motivation) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const db = client.db();

    await db.collection("waitlist").insertOne({
      name: name || "",
      email,
      occupation: occupation || "",
      habit: habit || "",
      failures: failures || "",
      riskMoney,
      maxRisk,
      motivation,
      desiredFeature: desiredFeature || "",
      features: Array.isArray(features) ? features : [],
      createdAt: new Date(),
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
